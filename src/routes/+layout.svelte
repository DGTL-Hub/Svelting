<script>
    import "../app.css";
    import FloatingNavbar from "../lib/components/ui/FloatingNavbar/FloatingNavbar.svelte";
  </script>
  
  <FloatingNavbar
    navItems={[
      { name: "Home", link: "/" },
      { name: "About", link: "/about" },
      { name: "Contact", link: "/contact" },
    ]} />



  <slot />