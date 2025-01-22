## Step1 Create project
```bash
npm create vite .
npm install
npm run dev
```


## Step2 push project to github
```bash
git init
git add .
git commit -m "init"
git push
```


### when update code
```bash
git add .
git commit -m "init"
git push
```

## Step3 install React Rounter
```bash
npm i react-rounter
```

```jsx
function MainNav() {
  return (
    <nav className='flex justify-between h-8 bg-green-200 px-5 items-center' >
    <div className='flex gap-6'>
     
    <Link to='/'>Home</Link>
     <Link to ='about'>About</Link>
     <Link to ='contact'>Contact</Link>
    </div>
    
     <div className='flex gap-6'>
     <Link to ='login'>Login</Link>
     <Link to ='register'>Register</Link>
     </div>    

   </nav>
  )
}

export default MainNav

```