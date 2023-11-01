import { HomeIcon, XMarkIcon, Cog8ToothIcon, UserCircleIcon, DocumentIcon, DocumentPlusIcon, DocumentDuplicateIcon } from "@heroicons/react/24/solid"
import { BiCart, BiCartAlt, BiCartAdd, BiUser, BiUserPlus, BiUserCircle } from "react-icons/bi"
import { Home } from "@/pages/Dashboard"
import { Bill, AllBills, Product, AllProducts } from "@/pages/Dashboard/cashier"

const routes = {
    cashier : [
        {
            name: 'Home',
            path: '/home',
            icon: <HomeIcon className='w-5 h-5 text-blue-500' />,
            component: <Home />
        },
        [
            "Bills",
            {
                name: 'New Bill',
                path: '/new-bill',
                icon: <DocumentPlusIcon className='w-5 h-5 text-blue-500' />,
                component: <Bill />
            },
            {
                name: 'All Bills',
                path: '/all-bills',
                icon: <DocumentDuplicateIcon className='w-5 h-5 text-blue-500' />,
                component: <AllBills />
            },
        ],
        [
            "Products",
            {
                name: 'New Product',
                path: '/new-product',
                icon: <BiCartAdd className='w-5 h-5 text-blue-500' />,
                component: <Product />
            },
            {
                name: 'All Products',
                path: '/all-products',
                icon: <BiCartAlt className='w-5 h-5 text-blue-500' />,
                component: <AllProducts />
            },
        ],
        [
            "Users",
            {
                name: 'New User',
                path: '/new-user',
                icon: <BiUserPlus className='w-5 h-5 text-blue-500' />,
                component: <Home />
            },
            {
                name: 'All Users',
                path: '/all-users',
                icon: <BiUser className='w-5 h-5 text-blue-500' />,
                component: <Home />
            },
        ],
        {
            name: 'Profile',
            path: '/profile',
            icon: <UserCircleIcon className='w-5 h-5 text-blue-500' />,
            component: <Home />
        },
        {
            name: 'Settings',
            path: '/settings',
            icon: <Cog8ToothIcon className='w-5 h-5 text-blue-500' />,
            component: <Home />
        }
    ]
}