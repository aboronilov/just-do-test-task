import Image from 'next/image'
import Link from 'next/link'
import { ThemeToggler } from "@/components/common"

type Props = {}

const Header = (props: Props) => {
    return (
        <header className='flex items-center justify-between px-8 py-5 border-destructive border rounded-md'>
            <Link href="https://justdo-full.ru/" target='_blank' className='flex items-center cursor-pointer'>
                <div className=' dark:bg-black w-fit'>
                    <Image
                        src='https://justdo-full.ru/source/img/logo.svg'
                        alt='logo'
                        className='invert'
                        height={70}
                        width={70}
                    />
                </div>
            </Link>
            <h1 className='font-bold text-xl'>Fullstack developer test task</h1>
            <ThemeToggler className="" />
        </header>
    )
}

export default Header