import React from 'react'

export const Categories = () => {
    const data = [
        {
            cateImg: "./images/category/escovas.png",
            catName: "Acessórios",
        },
        {
            cateImg: "./images/category/escovas.png",
            catName: "Ativadores de Cachos",
        },
        {
            cateImg: "./images/category/escovas.png",
            catName: "Cremes de Pentear",
        },
        {
            cateImg: "./images/category/escovas.png",
            catName: "Finalizadores",
        },
        {
            cateImg: "./images/category/escovas.png",
            catName: "Gelatinas",
        },
        {
            cateImg: "./images/category/escovas.png",
            catName: "Máscaras de Tratamento",
        },
        {
            cateImg: "./images/category/escovas.png",
            catName: "Shampoos e Condicionadores",
        },
        {
            cateImg: "./images/category/escovas.png",
            catName: "Óleos Capilares",
        },
        {
            cateImg: "./images/category/escovas.png",
            catName: "Kits",
        },
        {
            cateImg: "./images/category/escovas.png",
            catName: "Infantil",
        },
        {
            cateImg: "./images/category/escovas.png",
            catName: "Fashion",
        }
    ]
  return (
    <>
        <div className="category">
            {data.map((value, index) => {
                return (
                    <div className="box f_flex" key={index}>
                        <img src={value.cateImg} alt="imagem" />
                        <span>{value.catName}</span>
                    </div>
                )
            })}

        </div>
    </>
  )
}
