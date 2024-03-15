My Learning from the hooBank project : 

- use of map function and constanst for building the site,
  ```javascript
  {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px]
             ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}        // --> this specific thing is for setting marging of right most link in navbar ! 
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
  ))}
  ```

- making navbar responsive ( making it hidden and scroll down type for mobile )
  ```javascript
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu} // toggle hai to close rakho o/w menu ka image 
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}  // on click pe toggle ka state bhi change karo 
        />

        <div
          className={`${ !toggle ? "hidden" : "flex" }
                    p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
  ```


  - creating HERO Page :
  
