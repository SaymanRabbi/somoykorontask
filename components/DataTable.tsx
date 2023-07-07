interface DataTableProps {
    data: any[]
}



const DataTable:React.FC<DataTableProps> = ({
    data
}) => {

    return (  
<div className="relative overflow-x-auto mt-8  md:max-w-[600px] w-full">
    <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-300">
            <tr>
                <th scope="col" className="px-6 py-3">
                     Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Email
                </th>
                <th scope="col" className="px-6 py-3">
                    Age
                </th>
            </tr>
        </thead>
        <tbody>
            {
                data.map((item,index)=>(
                    <tr className=" border-b border-gray-500 bg-gray-300">
                <th scope="row" className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">
                    {item.name}
                </th>
                <td className="px-6 py-4">
                    {item.email}
                </td>
                <td className="px-6 py-4">
                    {item.age}
                </td>
            </tr>
                ))
            }
        </tbody>
    </table>
</div>

    )
}


export default DataTable;