/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    // API_2: 'http://3.87.57.109:3000',
    API_2: 'http://localhost:5000'
   // API_2: 'https://test.nonacademy.org',
    // API_2: 'http://localhost:5000',
  }
}

module.exports = nextConfig
