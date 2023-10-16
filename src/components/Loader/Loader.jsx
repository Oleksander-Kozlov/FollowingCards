import { Discuss } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Discuss
      visible={true}
      height="380"
      width="380"
      colors={['rgba(87, 54, 163, 0.54)', 'rgb(188, 127, 191)']}
      ariaLabel="comment-loading"
      wrapperStyle={{
        marginTop: '40px',
        marginBottom: '40px',
        width: '50vw',
        height: '50vh',
      }}
      wrapperClass="comment-wrapper"
      backgroundColor="#F3F3F3"
    />
  );
}