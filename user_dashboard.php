<?php
    session_start();
    include 'include/header.php';
?>
<main>
        <div class="container-full bg-dashboard">
            <div class="container-center dashboard">
                <div class="menu-navigation-bar">
                    <ul class="menu-navigation-list">
                        <li class="menu-navigation-item"><a href="admin_dashboard.php?act=bangdieukien">Bảng Điều Khiển</a><i class="fa-solid fa-gauge"></i></li>
                        <li class="menu-navigation-item"><a href="admin_dashboard.php?act=donhang">Đơn Hàng</a><i class="fa-solid fa-basket-shopping"></i></li>
                        <li class="menu-navigation-item"><a href="admin_dashboard.php?act=phieugiamgia">Phiếu Giảm Giá</a><i class="fa-solid fa-ticket"></i></li>
                        <li class="menu-navigation-item"><a href="admin_dashboard.php?act=diachi">Địa chỉ</a><i class="fa-solid fa-house"></i></li>
                        <li class="menu-navigation-item"><a href="admin_dashboard.php?act=chitiettaikhoan">Chi Tiết Tài Khoản</a><i class="fa-solid fa-user"></i></li>
                        <li class="menu-navigation-item"><a href="page/logout.php">Đăng Xuất</a><i class="fa-solid fa-right-from-bracket"></i></li>
                    </ul>
                </div>
                <div class="dashboard-content">
                <?php
                    //  admin-dashboard.php
                    
                        $page = isset($_GET['act']) ? $_GET['act'] : 'bangdieukien'; 
                    
                        switch ($page) {
                            case 'bangdieukien':
                                include 'page/bangdieukien.php';
                                break;
                            case 'donhang':
                                include 'page/donhang.php';
                                break;
                            case 'phieugiamgia':
                                include 'page/phieugiamgia.php';
                                break;
                            case 'diachi':
                                include 'page/diachi.php';
                                break;
                            case 'chitiettaikhoan':
                                include 'page/chitiettaikhoan.php';
                                break;
                            default:
                                include 'page/bangdieukien.php';
                                break;
                        }
                ?> 
                </div>
                
            </div>
        </div>
</main>

<?php
    include 'include/footer.php';
?>