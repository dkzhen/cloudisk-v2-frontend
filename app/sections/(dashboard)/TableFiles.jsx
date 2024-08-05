"use client";
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  getKeyValue,
  Button,
} from "@nextui-org/react";
import Image from "next/image";

export default function CustomTableFiles() {
  const users = [
    {
      key: "1",
      name: "Tony Reichert solama sidund jdjojohh",
      role: "CEO",
      action: "Active",
    },
    {
      key: "2",
      name: "Zoey Lang",
      role: "Technical Lead",
      action: "Paused",
    },
    {
      key: "3",
      name: "Jane Fisher",
      role: "Senior Developer",
      action: "Active",
    },
    {
      key: "4",
      name: "William Howard",
      role: "Community Manager",
      action: "Vacation",
    },
    {
      key: "5",
      name: "Emily Collins",
      role: "Marketing Manager",
      action: "Active",
    },
    {
      key: "6",
      name: "Brian Kim",
      role: "Product Manager",
      action: "Active",
    },
    {
      key: "7",
      name: "Laura Thompson",
      role: "UX Designer",
      action: "Active",
    },
    {
      key: "8",
      name: "Michael Stevens",
      role: "Data Analyst",
      action: "Paused",
    },
    {
      key: "9",
      name: "Sophia Nguyen",
      role: "Quality Assurance",
      action: "Active",
    },
    {
      key: "10",
      name: "James Wilson",
      role: "Front-end Developer",
      action: "Vacation",
    },
    {
      key: "11",
      name: "Ava Johnson",
      role: "Back-end Developer",
      action: "Active",
    },
    {
      key: "12",
      name: "Isabella Smith",
      role: "Graphic Designer",
      action: "Active",
    },
    {
      key: "13",
      name: "Oliver Brown",
      role: "Content Writer",
      action: "Paused",
    },
    {
      key: "14",
      name: "Lucas Jones",
      role: "Project Manager",
      action: "Active",
    },
    {
      key: "15",
      name: "Grace Davis",
      role: "HR Manager",
      action: "Active",
    },
    {
      key: "16",
      name: "Elijah Garcia",
      role: "Network Administrator",
      action: "Active",
    },
    {
      key: "17",
      name: "Emma Martinez",
      role: "Accountant",
      action: "Vacation",
    },
    {
      key: "18",
      name: "Benjamin Lee",
      role: "Operations Manager",
      action: "Active",
    },
    {
      key: "19",
      name: "Mia Hernandez",
      role: "Sales Manager",
      action: "Paused",
    },
    {
      key: "20",
      name: "Daniel Lewis",
      role: "DevOps Engineer",
      action: "Active",
    },
    {
      key: "21",
      name: "Amelia Clark",
      role: "Social Media Specialist",
      action: "Active",
    },
    {
      key: "22",
      name: "Jackson Walker",
      role: "Customer Support",
      action: "Active",
    },
    {
      key: "23",
      name: "Henry Hall",
      role: "Security Analyst",
      action: "Active",
    },
    {
      key: "24",
      name: "Charlotte Young",
      role: "PR Specialist",
      action: "Paused",
    },
    {
      key: "25",
      name: "Liam King",
      role: "Mobile App Developer",
      action: "Active",
    },
  ];

  const [page, setPage] = React.useState(1);
  const rowsPerPage = 10;

  const pages = Math.ceil(users.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return users.slice(start, end);
  }, [page, users]);

  return (
    <Table
      aria-label="Example table with client side pagination"
      bottomContent={
        <div className="flex w-full justify-center">
          <Pagination
            isCompact
            showControls
            showShadow
            color="secondary"
            page={page}
            total={pages}
            onChange={(page) => setPage(page)}
          />
        </div>
      }
      classNames={{
        wrapper: "",
      }}
      className="mt-4 mb-8 px-2 md:px-20"
    >
      <TableHeader>
        <TableColumn key="name">Name</TableColumn>
        <TableColumn className="hidden sm:table-cell" key="role">
          Size
        </TableColumn>
        <TableColumn key="action">Action</TableColumn>
      </TableHeader>
      <TableBody items={items}>
        {(item) => (
          <TableRow key={item.name}>
            {(columnKey) => (
              <TableCell
                className={columnKey === "role" ? "hidden sm:table-cell" : ""}
              >
                {columnKey === "name" ? (
                  <div className="flex items-center">
                    <img
                      src="/images/firebase-icon.png"
                      width={20}
                      height={20}
                      alt="Icon"
                      className="w-6 h-6 mr-2"
                    />
                    {getKeyValue(item, columnKey)}
                  </div>
                ) : columnKey === "action" ? (
                  <div className="flex items-center">
                    <Button size="sm" color="primary">
                      Download
                    </Button>
                  </div>
                ) : (
                  getKeyValue(item, columnKey)
                )}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
