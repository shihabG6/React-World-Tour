import './countri.css'
const Countri = ({Countri},key) => {
  
  console.log(Countri)
  return (
    <div className="countri">
      <img src={Countri.flags.png} alt="" />
      <h2>Shihab</h2>
    </div>
  );
};

export default Countri;