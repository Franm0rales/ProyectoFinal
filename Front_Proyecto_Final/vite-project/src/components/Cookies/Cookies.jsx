import { useCookies } from 'react-cookie';

export default function Cookies(){
  const [cookies, setCookie] = useCookies(['acceptedCookies']);

  const acceptCookies = () => {
    setCookie('acceptedCookies', true, { path: '/' });
  };

  return (
    <> 
    <div className='container  '>
      {cookies.acceptedCookies ? null : (
        <div className="cookie-notice ">
          <h3 className='text-center mt-2 text-primary'>
            Este sitio web utiliza cookies para mejorar la experiencia del usuario. Al utilizar este sitio, aceptas nuestro uso de cookies.
          </h3>
          <div className='d-flex justify-content-center'>
          <button id='botones' className='rounded' onClick={acceptCookies}>Aceptar</button>
          </div>
        </div>
      )}
      </div>
    </>
  );
};

