'use client';
import Nav from '../components/Nav';
import React from 'react';

function Book() {
    return(
        <>
        <Nav />
        <section className="bg-white h-screen text-black">
          <div className="container mx-auto pt-5 overflow-x-auto">
              <table className="bg-slate-300 table table-xs table-pin-rows table-pin-cols">
              <thead>
                  <tr className="bg-slate-400">
                      <th className="border border-slate-600 px-4 py-2">Title</th>
                      <th className="border border-slate-600 px-4 py-2">Author</th>
                      <th className="border border-slate-600 px-4 py-2">Edition</th>
                      <th className="border border-slate-600 px-4 py-2">Price</th>
                      <th className="border border-slate-600 px-4 py-2">Status</th>
                      <th className="border border-slate-600 px-4 py-2">Overview</th>
                      <th className="border border-slate-600 px-4 py-2">Type</th>
                      <th className="border border-slate-600 px-4 py-2">Genere</th>
                      <th className="border border-slate-600 px-4 py-2">Action</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td className="border border-slate-600 px-4 py-2">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                      <td className="border border-slate-600 px-4 py-2">Malcolm Lockyer</td>
                      <td className="border border-slate-600 px-4 py-2">1961</td>
                      <td className="border border-slate-600 px-4 py-2">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                      <td className="border border-slate-600 px-4 py-2">Malcolm Lockyer</td>
                      <td className="border border-slate-600 px-4 py-2">1961</td>
                      <td className="border border-slate-600 px-4 py-2">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                      <td className="border border-slate-600 px-4 py-2">Malcolm Lockyer</td>
                      <td className="border border-slate-600 px-4 py-2">1961</td>
                  </tr>
                  <tr>
                      <td className="border border-slate-600 px-4 py-2">Witchy Woman</td>
                      <td className="border border-slate-600 px-4 py-2">The Eagles</td>
                      <td className="border border-slate-600 px-4 py-2">1972</td>
                      <td className="border border-slate-600 px-4 py-2">Witchy Woman</td>
                      <td className="border border-slate-600 px-4 py-2">The Eagles</td>
                      <td className="border border-slate-600 px-4 py-2">1972</td>
                      <td className="border border-slate-600 px-4 py-2">Witchy Woman</td>
                      <td className="border border-slate-600 px-4 py-2">The Eagles</td>
                      <td className="border border-slate-600  px-4 py-2">1972</td>
                  </tr>
              </tbody>
          </table>
      </div>
      </section>
</>
    );
};

export default Book;