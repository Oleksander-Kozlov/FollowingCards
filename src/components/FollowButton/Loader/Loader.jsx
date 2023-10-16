import { Discuss } from 'react-loader-spinner';

export const Loader = () => {
  return (    <Discuss
      visible={true}
      height="80"
      width="80"
      ariaLabel="comment-loading"
      wrapperStyle={{
        marginTop: '40px',
        marginBottom: '40px',
        justifyContent: 'center',
      }}
      wrapperClass="comment-wrapper"
      color="#3220be"
      backgroundColor="#F4442E" /> )
}