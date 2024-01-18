'use server'
 
import { cookies } from 'next/headers'
 
export async function createCookies(data) {
  cookies().set('user',data)
   return true
  
  
}
export async function hasCookies() {
  const cookiesList = cookies()
  const hasCookie = cookiesList.has('user')
  return hasCookie
  
}
export async function deleteCookies() {
    cookies().delete('user')
    return true
  }

   