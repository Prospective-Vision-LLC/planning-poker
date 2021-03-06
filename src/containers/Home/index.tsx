import * as React from 'react'
import { connect } from 'react-redux'
import Home from './view'
import { setLanguage, setLoading, setError, setSession } from '../../actions/global'
import { logout } from '../../actions/auth'
import './style.css'

const mapStateToProps = (state: any) => {
  return ({
    ...state.auth,
    ...state.global
  })
}

const mapDispatchToProps = (dispatch: any) => ({
  setLanguage: (lang: string) => {
    dispatch(setLanguage(lang))
  },
  logout: () => {
    dispatch(logout())
  },
  setLoading: (loading: boolean) => {
    dispatch(setLoading(loading))
  },
  setError: (isError: boolean) => {
    dispatch(setError(isError))
  },
  setSession: (session: any) => {
    dispatch(setSession(session))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
