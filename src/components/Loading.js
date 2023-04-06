import CardBg from './CardBg';
import BeatLoader from 'react-spinners/BeatLoader';

const Loading = () => {
  return (
    <CardBg>
      <section className='spinner'>
        <BeatLoader
          color={'#0079ff'}
          size={20}
          aria-label={'Loading spinner'}
        />
      </section>
    </CardBg>
  );
};

export default Loading;
