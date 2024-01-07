/* 
for not rendered the site 

<Router> 
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login-signup" element={<LoginSignup />} />
        <Route path="/content" element={<Content />} /
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
</Router>

*/

Use <Link> instead of <a> 
and to="" instead of href in a tag 

 

