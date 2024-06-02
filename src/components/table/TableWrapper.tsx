"use client";
import React, { useEffect, useState } from 'react';
import { FileType } from '../../../typings';
import { Button } from '../ui/button'
import { DataTable } from './Table';
import { columns } from './columns';
import { useUser } from '@clerk/nextjs';
import {useCollection} from "react-firebase-hooks/firestore";
import { collection, orderBy, query } from 'firebase/firestore';
import { db } from '../../../firebase';
import { auth } from '@clerk/nextjs/server';

function TableWrapper(
    {skeletonFiles}: {skeletonFiles: FileType[]}
) {

  const {user} = useUser();
  console.log(user);
  const [initialFiles, setInitialFiles] = useState<FileType[]>([]);
  const [sort, setSort] = useState<"asc" | "desc" >("desc");

  const [docs, loading, error] = useCollection(
    user &&
      query(
        collection(db, "users", user.id, "files"),
        orderBy("timestamp", sort),
      )
  );


    useEffect(() => {

      if (!docs) 
        return;

      const files: FileType[] = docs.docs.map(doc => ({
        id: doc.id,
        filename: doc.data().filename || doc.id,
        timestamp: new Date(doc.data().timeStamp?.seconds * 1000) || undefined,
        fullName: doc.data().fullName,
        downloadURL: doc.data().downloadURL,
        type: doc.data().type,
        size: doc.data().size,
      }));

      setInitialFiles(files);


    }, [docs]);




  return (
    <div>
        <Button onClick={() => setSort(sort === "desc" ? "asc": "desc")}
        >Sort By {sort === "desc" ? "Newest": "Oldest"}</Button>

        <DataTable columns={columns} data={initialFiles} />
    </div>
  )
}

export default TableWrapper