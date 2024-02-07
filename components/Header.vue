<script setup lang="ts">

const logout = () => {
  localStorage.removeItem('username');
  localStorage.removeItem('authToken');
  alert('ログアウトしました');
  navigateTo('/');
};
</script>

<template>
  <Navbar z="3" expand="lg" class="bgColor neonShadow lock-header">
    <Container>
      <NavbarBrand to="/homepage" class="wText">就活アシスタント</NavbarBrand>
      <NavbarToggler />
      <NavbarCollapse>
        <NavbarNavList margin="e-auto">
          <NavItem>
            <NavLink to="/homepage"> ホーム </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/"> ログインページ </NavLink>
          </NavItem>
          <NavItem>
            <NavLink @click="logout" >
              ログアウト
            </NavLink>
          </NavItem>
        </NavbarNavList>
        <NavbarNavList>
          <ColorModeNavItemDropdown />
        </NavbarNavList>
      </NavbarCollapse>
    </Container>
  </Navbar>
</template>

<style>
.bgColor {
  background-color: #25d58f;
}

.wText {
  color: aliceblue;
  text-shadow: 1px 1px 2px black;
  font-size: 30px;
}

.wText:hover {
  color: aliceblue;
}

.neonShadow {
  box-shadow: 0 0 10px #25d58f;
}

.lock-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
</style>
