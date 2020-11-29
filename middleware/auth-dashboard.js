export default function({ $auth, redirect }) {
  const user = $auth.user
  console.log(user)
  if (user && user.role < 4) {
    // logs in
  } else {
    redirect('/Login')
  }
}
