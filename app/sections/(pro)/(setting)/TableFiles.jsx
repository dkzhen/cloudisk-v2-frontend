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
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { users } from "@/config/site";

export default function CustomTableFiles() {
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 10;

  const pages = Math.ceil(users.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    return users.slice(start, start + rowsPerPage);
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
      className="mt-4 mb-8 px-2 md:px-20"
    >
      <TableHeader>
        <TableColumn key="name">Name</TableColumn>
        <TableColumn className="hidden sm:table-cell" key="role">
          Size
        </TableColumn>
        <TableColumn key="status">Status</TableColumn>
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
                    <Dropdown>
                      <DropdownTrigger>
                        <Button auto light>
                          <svg
                            width="20"
                            height="20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="10"
                              cy="5"
                              r="1.5"
                              fill="currentColor"
                            />
                            <circle
                              cx="10"
                              cy="10"
                              r="1.5"
                              fill="currentColor"
                            />
                            <circle
                              cx="10"
                              cy="15"
                              r="1.5"
                              fill="currentColor"
                            />
                          </svg>
                        </Button>
                      </DropdownTrigger>
                      <DropdownMenu
                        aria-label="Action event example"
                        onAction={(key) => alert(key)}
                      >
                        <DropdownItem
                          key="new"
                          className="text-primary"
                          color="primary"
                        >
                          Download
                        </DropdownItem>
                        <DropdownItem
                          key="edit"
                          className="text-warning"
                          color="warning"
                        >
                          Delete
                        </DropdownItem>
                        <DropdownItem
                          key="delete"
                          className="text-danger"
                          color="danger"
                        >
                          Drop
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
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
