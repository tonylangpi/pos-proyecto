/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        HOST: 'localhost',
        USER: 'Lang',
        PASS: 'basededatos123',
        PORT: 3306,
        DATABASE:'suplementosPOS',
        NEXTAUTH_URL:'http://localhost:3000',
        NEXTAUTH_SECRET:'sadasdfsd'
      },
}

module.exports = nextConfig
