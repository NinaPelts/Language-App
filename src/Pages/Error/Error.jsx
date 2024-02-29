import './Error.scss'
import error_image from '../../assets/images/404-NotFound.jpg'

export default function Error() {
    return <div className='error_page'>
        <h1 className='error_page_title'>Oops...</h1>
        <h2 className='error_page_untertitle'>Page Not Found</h2>
        <img src={error_image} alt="page not found" className="error_image" />
    </div>
}