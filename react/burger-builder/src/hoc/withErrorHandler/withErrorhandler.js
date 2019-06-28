import React, {useState, useEffect} from 'react';
import Modal from '../../components/UI/Modal/Modal';
import axios from 'axios';

const withErrorhandler = WrappedComponent => {
  return props => {
    const [err, setError] = useState(null);

    const reqInterceptor = axios.interceptors.request.use(req => {
      setError(null);
      return req;
    });
    const resInterceptor = axios.interceptors.request.use( res => res, err => {
      setError(err);
      return err;
    })

    useEffect(() => {
      return () => {
        axios.interceptors.request.eject(reqInterceptor);
        axios.interceptors.response.eject(resInterceptor);
      };
    }, [reqInterceptor, resInterceptor]);

    const errorConfirmedHandler = () => {
      setError(null);
    };

    return (
      <>
        <Modal show={err} modalClosed={errorConfirmedHandler}>
          {err ? err.message : null}
        </Modal>
        <WrappedComponent {...props}/>
      </>
    ); 
  };
};

export default withErrorhandler;