
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <p className='text-center'><span className="loading loading-bars loading-lg my-16"></span></p>
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={location.pathname}></Navigate>;
};

export default ProtectedRoute;

ProtectedRoute.propTypes = {
    children:PropTypes.node
}