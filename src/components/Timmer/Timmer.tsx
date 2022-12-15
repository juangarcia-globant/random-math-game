type TimmerProps = {
  seconds: number;
};

export const Timmer: React.FunctionComponent<TimmerProps> = ({ seconds }) => {
  return (
    <span>
      <i className="fas fa-clock"></i> <b>{ seconds }</b>
    </span>
  )
}

export default Timmer;