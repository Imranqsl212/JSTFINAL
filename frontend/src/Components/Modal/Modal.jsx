import classes from './Modal.module.css'


const Modal = ({closeModal,isModalOpen,title,content}) => {
  return (
    <>
      <div className={`${classes.modal} ${isModalOpen ? "" : classes.hidden}`}>
        <h1 style={{textAlign:'center'}}>{title}</h1>
        <br />
        <br />
        <h2 style={{textAlign:"center"}} className={classes.h2}>{content}</h2>
      </div>
      <div
        className={`${classes.overlay} ${isModalOpen ? "" : classes.hidden}`}
        onClick={closeModal}
      ></div>
    </>
  );
};

export default Modal;