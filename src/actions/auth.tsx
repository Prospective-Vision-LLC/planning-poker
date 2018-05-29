import { oauth, models } from '../services'

const authSuccess = (model: any) => ({
  type: 'AUTH_SUCCESS',
  payload: {
    user: models.user(model)
  }
})

const authFail = (error: any) => ({
  type: 'AUTH_FAIL',
  payload: {
    error
  }
})

const getInfo = (authToken: string, provider = 'github') => {
  if (provider === 'google') {
    return oauth.googleInfo(authToken)
  } else {
    return oauth.githubInfo(authToken)
  }
}

export default (authToken: string, provider: string) => {
  return (dispatch: any) => {
    getInfo(authToken, provider)
      .then((response: any) => response.json())
      .then((response: any) => (dispatch(authSuccess(response))))
      .catch((err: any) => dispatch(authFail(err)))
  }
}
