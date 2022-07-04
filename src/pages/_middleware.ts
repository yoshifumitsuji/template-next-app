import { NextRequest, NextResponse } from 'next/server'

export const middleware = (req: NextRequest) => {
  const basicAuth = req.headers.get('authorization')

  if (basicAuth) {
    const auth = basicAuth.split(' ')[1]
    const [user, password] = Buffer.from(auth, 'base64').toString().split(':')

    if (user === 'template' && password === 'template') {
      return NextResponse.next()
    }
  }

  return

  // Apply the following comment when use basic auth
  // return new Response('Auth required', {
  //   status: 401,
  //   headers: {
  //     'WWW-Authenticate': 'Basic realm="Secure Area"',
  //   },
  // })
}
