export const metadata = {
    title : 'Phone - Mahaveer',
    description : 'this is phone number for mahaveer'
}

export default function PhoneLayout({children}){
    return(
        <div className='text-3xl text-center text-blue-300'>
            <div>Phone NavBar</div>
            <main>{children}</main>
        </div>
    );
}