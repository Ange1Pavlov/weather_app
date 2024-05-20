import MainCard from './MainCard';

const ErrorMessage = ({ errorMessage, textColor }) => {
  return (
    <MainCard showHeader>
      <div className='p-5'>
        <p className={`${textColor || 'text-red-300'} text-center`}>
          {errorMessage}
        </p>
      </div>
    </MainCard>
  );
};

export default ErrorMessage;
