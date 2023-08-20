import CardBg from './CardBg';

const Error = ({ message }) => {
  return (
    <CardBg>
      <p>Something went wrong: {message}</p>
    </CardBg>
  );
};

export default Error;
