<script setup></script>

<template>
  <div class="mt-20 ml-20">
    <div class="relative">
      <div class="w-[72px] h-[72px] relative">
        <div
          class="w-[72px] h-[72px] rounded-[13px] overflow-hidden bg-green-500 relative"
        >
          <img width="100%" height="100%" src="/Profile.png" alt="profile" />
        </div>
        <div
          class="w-[29px] h-[29px] bg-[#DC3434] rounded-full absolute -top-[14px] -right-[14px]"
        >
          <div
            class="font-poppins_semibold text-[13px] text-white py-[6px] px-[10px]"
          >
            4
          </div>
        </div>
      </div>
      <h3
        class="font-poppins_semibold font-semibold text-[30px] text-white mt-5 mb-[5px]"
      >
        Samantha
      </h3>
      <p
        class="font-poppins_regular font-normal text-[17px] text-[rgba(255,255,255,.6)]"
      >
        samantha@email.com
      </p>
      <div>
        <nav>
          <ul class="flex flex-col gap-[30px] mt-[117px] capitalize">
            <li
              class="font-poppins_semibold font-semibold text-[25px] text-[rgba(255,255,255,.5)] hover:text-white cursor-pointer"
            >
              dashboard
            </li>
            <li
              class="font-poppins_semibold font-semibold text-[25px] text-white"
            >
              expenses
            </li>
            <li
              class="font-poppins_semibold font-semibold text-[25px] text-[rgba(255,255,255,.5)] hover:text-white cursor-pointer"
            >
              wallets
            </li>
            <li
              class="font-poppins_semibold font-semibold text-[25px] text-[rgba(255,255,255,.5)] hover:text-white cursor-pointer"
            >
              summary
            </li>
            <li
              class="font-poppins_semibold font-semibold text-[25px] text-[rgba(255,255,255,.5)] hover:text-white cursor-pointer"
            >
              accounts
            </li>
            <li
              class="font-poppins_semibold font-semibold text-[25px] text-[rgba(255,255,255,.5)] hover:text-white cursor-pointer"
            >
              settings
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
