<?php include 'include/header.php';?>
<main>

<?php
  //  index.php
  
      $page = isset($_GET['act']) ? $_GET['act'] : 'home'; 
  
      switch ($page) {
          case 'home':
              include 'page/home.php';
              break;
          case 'login':
              include 'page/login.php';
              break;
          case 'register':
              include 'page/register.php';
              break;
          case 'about':
              include 'page/about.php';
              break;
          default:
              echo "<h2>404 - Trang không tồn tại</h2>";
              break;
      }
?> 
</main>  
  <?php include 'include/footer.php'; ?>
  

