'use client';

import React, { useState } from 'react'
import { FileType } from '../../../typings'
import { Button } from '../ui/button'
import { DataTable } from './Table'
import { columns } from './columns'
import { useUser } from '@clerk/nextjs';

function TableWrapper(
    {skeletonFiles}: {skeletonFiles: FileType[]}
) {

  const {user} = useUser();
  const [initialFiles, setInitialFiles] = useState<FileType[]>([]);
  const [sort, setSort] = useState<"asc" | "desc" >("desc");




  return (
    <div>
        <Button onClick={() => setSort(sort === "desc" ? "asc": "desc")}
        >Sort By {sort === "desc" ? "Newest": "Oldest"}</Button>

        <DataTable columns={columns} data={skeletonFiles} />
    </div>
  )
}

export default TableWrapper