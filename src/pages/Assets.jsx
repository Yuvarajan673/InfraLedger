import { useEffect, useState } from "react"
import Button from "../components/Button"
import ButtonOutlined from "../components/ButtonOutlined"
import Modal from "../components/Modal"


function Assets() {
  const [ isModalOpen, setIsModalOpen ] = useState(false)
  const [ pageNo, setPageNo] = useState(1)
  const [ assets, setAssets ] = useState([])
  const [ skip, setSkip ] = useState(0)



  useEffect(() => {
    fetch(`http://127.0.0.1:4000/api/assets/${skip}`,{
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
    })
    .then(res => res.json())
    .then(data => setAssets(data))
    .catch(err => console.log(err))

  }, [skip]) 

  console.log(assets)


  const handleModalOpen = () => {
    setIsModalOpen(!isModalOpen)
  }


  const handleChange = (e) => {
    let value = e.target.value;

    value = value.replace(/[^0-9]/, "");
    value = value.slice(0, 5);
    value = parseInt(value);

    if(isNaN(value)){
      setPageNo(1)
    }else{
      setPageNo(value)
    }

  }

  const handleIncrement = () => {
    setPageNo(pageNo+1)
    setSkip(skip+5)
  }

  const handleDecrement = () => {
    pageNo > 1 ? setPageNo(pageNo-1) : null
    skip >= 0 ? setSkip(skip-5) : null  
  }


  return (
    <div className="flex flex-col gap-[30px]">

      <div className='flex justify-between items-center'>
        <div>
          <h1 className='text-3xl font-medium text-(--text)'>Hardware Inventory</h1>
          <p className="text-(--text)">Manage and track company assets across all locations.</p>
        </div>
        <div className="flex gap-[20px]">
          <ButtonOutlined value="Import CSV"/>
          <Button value="+ Add New Asset" onClick={handleModalOpen}/>
          <Modal isOpen={isModalOpen} closeModal={handleModalOpen}/>
        </div>
      </div>


      <div>
        <div className="py-[10px] flex justify-end">
          <button className="flex items-center gap-[5px] text-[13px] font-medium text-(--primary) border border-(--primary) p-[10px] rounded-[5px] cursor-pointer hover:bg-gray-100 transition-colors duration-300">
            <svg className="text-[16px]" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M10.5 8.25c-.19 0-.38-.07-.53-.22L8 6.06L6.03 8.03c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l2.5-2.5c.29-.29.77-.29 1.06 0l2.5 2.5c.29.29.29.77 0 1.06c-.15.15-.34.22-.53.22" /><path fill="currentColor" d="M8 19.75c-.41 0-.75-.34-.75-.75V5c0-.41.34-.75.75-.75s.75.34.75.75v14c0 .41-.34.75-.75.75m8 0c-.19 0-.38-.07-.53-.22l-2.5-2.5c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0L16 17.94l1.97-1.97c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-2.5 2.5c-.15.15-.34.22-.53.22" /><path fill="currentColor" d="M16 19.75c-.41 0-.75-.34-.75-.75V5c0-.41.34-.75.75-.75s.75.34.75.75v14c0 .41-.34.75-.75.75" /></svg>
            Sort by: Date
          </button>
        </div>
        <table className='w-full'>
          <thead className='border border-(--border) text-center cursor-pointer'>
            <tr>
              <th className='font-bold text-[14px] p-[15px] px-[25px] text-(--text)'>Serial Number</th>
              <th className='font-bold text-[14px] p-[15px] px-[25px] text-(--text)'>Name</th>
              <th className='font-bold text-[14px] p-[15px] px-[25px] text-(--text)'>Category</th>
              <th className='font-bold text-[14px] p-[15px] px-[25px] text-(--text)'>Status</th>
              <th className='font-bold text-[14px] p-[15px] px-[25px] text-(--text)'>Brand</th>
              <th className='font-bold text-[14px] p-[15px] px-[25px] text-(--text)'>Assigned To</th>
            </tr>
          </thead>
          <tbody>
            {assets.length > 0 && assets.map((asset) => {
            return (
              <tr className='border-b border-l border-r border-(--border) text-center'>
              <td className='font-normal text-[14px] p-[15px] px-[25px] text-(--primary)'>{asset.serialNumber}</td>
              <td className='font-normal text-[14px] p-[15px] px-[25px] text-(--text)'>{asset.assetName}</td>
              <td className='font-normal text-[14px] p-[15px] px-[25px] text-(--text)'>{asset.category}</td>
              <td className='font-normal text-[14px] p-[15px] px-[25px] text-(--text)'>{asset.status}</td>
              <td className='font-normal text-[14px] p-[15px] px-[25px] text-(--text)'>{asset.brand}</td>
              <td className='font-normal text-[14px] p-[15px] px-[25px] text-(--text)'>Sarah Jenkins</td>
            </tr>
            )
            }) }
          </tbody>
        </table>
        <div className="flex justify-between items-center p-[10px] px-[20px] border border-t-0 border-(--border)">
          <div>
            <p className="text-[15px] text-(--text)">Showing 1 to 10 of 152 assets</p>
          </div>

          <div className="flex items-center rounded-[10px] border border-(--border)">
            <button className="p-[12px] cursor-pointer text-(--primary) border-r border-(--border)" onClick={handleDecrement}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m13.883 5.007l.058-.005h.118l.058.005l.06.009l.052.01l.108.032l.067.027l.132.07l.09.065l.081.073l.083.094l.054.077l.054.096l.017.036l.027.067l.032.108l.01.053l.01.06l.004.057L15 6v12c0 .852-.986 1.297-1.623.783l-.084-.076l-6-6a1 1 0 0 1-.083-1.32l.083-.094l6-6l.094-.083l.077-.054l.096-.054l.036-.017l.067-.027l.108-.032l.053-.01l.06-.01z" /></svg>
            </button>

            <input type="text" value={pageNo} onChange={handleChange} className="w-[80px] text-(--primary) font-medium outline-0 p-[10px] text-center appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none" />

            <button className="p-[12px] h-full cursor-pointer border-l border-(--border) text-(--primary)" onClick={handleIncrement}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M9 6c0-.852.986-1.297 1.623-.783l.084.076l6 6a1 1 0 0 1 .083 1.32l-.083.094l-6 6l-.094.083l-.077.054l-.096.054l-.036.017l-.067.027l-.108.032l-.053.01l-.06.01l-.057.004L10 19l-.059-.002l-.058-.005l-.06-.009l-.052-.01l-.108-.032l-.067-.027l-.132-.07l-.09-.065l-.081-.073l-.083-.094l-.054-.077l-.054-.096l-.017-.036l-.027-.067l-.032-.108l-.01-.053l-.01-.06l-.004-.057z" /></svg>
            </button>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Assets
