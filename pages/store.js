export default function Store() {
  return (
    <main>
      <h1>CHOOSE YOUR SEATS</h1>
      <select name='outlet' id='outlet'>
        <option value='gmc'>Foodcourt GMC</option>
        <option value='komipa'>KOPMIPA UGM</option>
        <option value='sardjito'>Sardjito Food Corner</option>
      </select>
      <div className='grid grid-cols-5'>
        <div className='col-span-4'></div>
        <div className='col-span-1'>
          <div>
            <div></div>
            <div>Available</div>
          </div>
          <div>
            <div></div>
            <div>Chosen</div>
          </div>
          <div>
            <div></div>
            <div>Not Available</div>
          </div>
        </div>
      </div>
      <button>Confirm (3)</button>
    </main>
  );
}
