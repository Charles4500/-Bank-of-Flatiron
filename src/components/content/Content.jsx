import './content.css'

function Content() {
  return (
    <div className='content'>
      <form className='form'>
        Date:
      <input type="date" name="" id="" />
      </form >
      <form className='form'>
      <input type="text" />
        </form>
        <form className='form'>
        <input type="text" />
        </form>
        <form className='form'>
        <input type="text" />
        </form>
        <form className='form'>
       <input type="text" />
        </form>
        <button>Add Transaction</button>
    </div>
  )
}

export default Content