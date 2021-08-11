import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { useHistory} from 'react-router-dom';

import ReactTable from "react-table"; 
import { useTable } from 'react-table'; 

export default function Dashboard() {

    const [country,setCountry] = useState();
    const history = useHistory();

    useEffect(()=>{

        let authdata = JSON.parse(sessionStorage.getItem("auth")) || '';
        console.log("check in session storage");
        
        const data = {};
        const headers = { 
            'Authorization': 'Bearer ' + authdata.token
        };

        axios.get("http://localhost:8080/countries",{ headers }).then((x)=>{
            console.log(JSON.stringify(x));
            setCountry(x.data);
        }).catch(err=>{
            console.error(err);
            history.push("/error/200");
        })
    },[])

    const data = React.useMemo(
        () => [
          {
            col1: 'ca01',
            col2: 'KI3DF8974Y',
            col3: '780',
          },
          {
            col1: 'ca02',
            col2: 'BASDF8974Y',
            col3: '660',
          },
          {
            col1: 'ca03',
            col2: 'GIVDF8974Y',
            col3: '780',
          },
        ],
        []
    )
   
    const columns = React.useMemo(
        () => [
          {
            Header: 'id',
            accessor: 'col1', // accessor is the "key" in the data
          },
          {
            Header: 'Pan number',
            accessor: 'col2',
          },
          {
            Header: 'Cibil Score',
            accessor: 'col3', // accessor is the "key" in the data
          },
        ],
        []
    )
   
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    } = useTable({ columns, data })
   
    return (
        <div>
            <h1>CHECK CIBIL SCORE</h1>
            {country && country.map((x,idx)=>{
                return <h4 key={idx}>{x.id} - {x.name}</h4>;
            })}
            <h4>Your cibil report</h4>
     <center>
        <table {...getTableProps()} style={{ border: 'solid 1px black '}}>
         <thead>
         {headerGroups.map(headerGroup => (
             <tr {...headerGroup.getHeaderGroupProps()}>
               {headerGroup.headers.map(column => (
                   <th
                       {...column.getHeaderProps()}
                       style={{
                         borderBottom: 'solid 3px red',
                         color: 'black',
                       }}
                   >
                     {column.render('Header')}
                   </th>
               ))}
             </tr>
         ))}
         </thead>
         <tbody {...getTableBodyProps()}>
         {rows.map(row => {
           prepareRow(row)
           return (
               <tr {...row.getRowProps()}>
                 {row.cells.map(cell => {
                   return (
                       <td
                           {...cell.getCellProps()}
                           style={{
                             padding: '10px',
                             border: 'solid 1px gray',
                           }}
                       >
                         {cell.render('Cell')}
                       </td>
                   )
                 })}
               </tr>
           )
         })}
         </tbody>
       </table>
       </center>
        </div>
    )
}
