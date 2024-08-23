import React from 'react'

function Card({ cours }) {
  const { isim, metin, fiyat, id, resim } = cours
  console.log(isim)

  return (
    <div>
      <div className='cardList'>
        <div className='card'>
          <div className='top'>
            <img src={resim} alt="" className='resim' />
          </div>
          <div className='body'>
            <h1>{isim}</h1>
            <h3>{metin}</h3>
          </div>
          <div className="bottom">
            <h5>Ürün Kodu : {id}</h5>
            <h5>Fiyatı : {fiyat}</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card