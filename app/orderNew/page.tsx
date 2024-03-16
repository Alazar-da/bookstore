'use client';
import Nav from '../components/Nav'
import React, { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

interface OrderData {
    _id: string;
    Title: string;
    Author: string;
    UserName: string;
    PhoneNumber: string;
  }
function OrderNew() {
    const [data, setData] = useState<OrderData[]>([]);
    const [deleteId, setDeleteId] = useState();
    useEffect(() => {
        fetchData();
      }, []);

      const fetchData = async () => {
        const response = await fetch('/api/ordernew');
        const datas = await response.json();
        setData(datas);
      };
    const Delete = async (deleteId: string) => {

        const response = await fetch(`/api/ordernew/${deleteId}`,{
            method:'DELETE',
        });
        const datas = await response.json();
        fetchData()
       /*  setData(datas); */
      }
    return (
        <>
        <Nav/>
        <section className="bg-white h-screen text-black">
        <div className="container mx-auto pt-5 overflow-x-auto">
            <table className="bg-slate-300 table table-xs table-pin-rows table-pin-cols">
            <thead>
                <tr className="bg-slate-400">
                    <th className="border border-slate-600 px-4 py-2">Title</th>
                    <th className="border border-slate-600 px-4 py-2">Author</th>
                    <th className="border border-slate-600 px-4 py-2">User Name</th>
                    <th className="border border-slate-600 px-4 py-2">Phone Number</th>
                    <th className="border border-slate-600 px-4 py-2">Action</th>
                </tr>
            </thead>
            <tbody>
            {data.map((item) => (
                <tr key={item._id}>
                  <td className="border border-slate-600 px-4 py-2">{item.Title}</td>
                  <td className="border border-slate-600 px-4 py-2">{item.Author}</td>
                  <td className="border border-slate-600 px-4 py-2">{item.UserName}</td>
                  <td className="border border-slate-600 px-4 py-2">{item.PhoneNumber}</td>
                  <td className="border border-slate-600 px-2 py-2 flex justify-center">
                    <Popup trigger={<button className='btn btn-secondary'>Delete</button>}
     position="left center">
      <div className='text-black text-sm'>Delete {item.Title} book</div>
      <button onClick={()=>Delete(item._id)} className='btn btn-warning btn-sm'>Confrim</button>
    </Popup>
                  </td>
                </tr>
              ))}

            </tbody>
        </table>
    </div>
    </section>
    </>
    );
  }

  export default OrderNew;
