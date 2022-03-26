import React from "react";
import Sidebar from "./Sidebar";
import Greetings from "./Greetings";
import Card from "./Card";
import Date from "./Date";
import IncomeCard from "./IncomeCard";
import PieChartt from "./PieChart";
import CardTitle from "./CardTitle";
import DounatChart from "./DounatChart";
import CardBudgets_Item from "./CardBudgets_Item";
import CurrentDate from "./CurrentDate";
import CalenderRow from "./CalenderRow";
import TransactionItem from "./TransactionItem";
import ProfileAvatar from "./ProfileAvatar";
import ProfileForm from "./ProfileForm";
import CategoryItem from "./CategoryItem";
import CalenderReact from "./CalenderReact";

function Dashboard() {
  return (
    <div className="flex bg-[url('https://i.ibb.co/ZY2ZMrF/background.jpg')]">
      {/* Sidebar */}
      <div className="w-[13%]">
        <Sidebar />
      </div>

      {/* Content */}
      <div className="w-[87%] py-4">
        <div className="p-4 min-h-screen flex ">
          <div className="border-2 border-gray-800 w-full min-h-full flex p-4 space-x-4">
            {/* Left Content */}
            <div className="w-[40%] space-y-4">
              <Greetings>Hello, Rahul</Greetings>

              {/* Card One */}
              <Card className="items-center">
                <div className="border-2 border-gray-800 rounded-lg px-2 py-1 h-fit space-x-4 font-semibold flex items-center justify-between w-10/12">
                  <span className="flex">Spending Overview</span>
                  <Date />
                </div>
                <div className="flex w-full mt-2 space-x-2 items-center">
                  <IncomeCard />
                  <PieChartt />
                  <IncomeCard expenses="true" />
                </div>

                {/* Progress Bar */}
                <div className=" w-full border-t-2 border-b-2 border-gray-800 py-2 px-6">
                  <div className="bg-[#3E4059] text-white rounded-xl  py-1">
                    <span className="pl-3">Monthly Budget</span>
                    <div className="flex w-full items-center pr-4 space-x-3">
                      <div className="h-[10px] flex bg-white rounded-md w-full">
                        {/* You can change the bar percentage below here */}
                        <div className="h-[10px] bg-[#31BACC] w-[70%] rounded-md"></div>
                      </div>
                      <span>75%</span>
                    </div>
                    <span className="pl-3">£350 / £2000</span>
                  </div>
                </div>
              </Card>
              {/* End Card One */}

              {/* Card Budgets */}
              <Card row="true" className="w-full space-x-2">
                {/* Left Section Card Budgets */}
                <div className="w-[50%] border-r-2 border-gray-800 pr-1">
                  <CardTitle>Budgets</CardTitle>
                  <Date />
                  <DounatChart />
                </div>

                {/* Right Section Card Budget */}
                {/* Loop Your Budget Items here */}
                <div className="w-[50%] space-y-2">
                  <CardBudgets_Item
                    image="car.svg"
                    title="Transport"
                    start="£100"
                    end="£180"
                  />
                  <CardBudgets_Item
                    image="food.svg"
                    title="Food"
                    start="£100"
                    end="£180"
                  />
                  <CardBudgets_Item
                    image="education.svg"
                    title="Educational Services"
                    start="£100"
                    end="£180"
                  />
                  <CardBudgets_Item
                    image="health.svg"
                    title="Health"
                    start="£100"
                    end="£180"
                  />
                  <CardBudgets_Item
                    image="clothing.svg"
                    title="Clothing & Footwear"
                    start="£100"
                    end="£180"
                  />
                </div>
              </Card>
            </div>

            {/* Middle Content */}
            <div className="w-[30%] space-y-4">
              {/* Card Daily Transaction */}
              <Card>
                <CardTitle className="justify-center">
                  Daily Transaction
                </CardTitle>
                <CurrentDate />
                <CalenderRow />
                {/* Loop Your Transaction Item Here */}
                <div className="space-y-2">
                  <TransactionItem
                    image="food.svg"
                    title="Sainsburys Groceries"
                    subTitle="Food"
                    price="£30"
                    date="Date: 17-03-2022"
                  />
                  <TransactionItem
                    image="car.svg"
                    title="Tesco Petrol"
                    subTitle="Transport"
                    price="£45"
                    date="Date: 17-03-2022"
                  />
                  <TransactionItem
                    image="alcohol.svg"
                    title="ASDA"
                    subTitle="Alcoholic Beverages"
                    price="£30"
                    date="Date: 17-03-2022"
                  />
                  <TransactionItem
                    image="cinema.svg"
                    title="Odeon Cinema"
                    subTitle="Recreation & Culture"
                    price="£30"
                    date="Date: 17-03-2022"
                  />
                  <TransactionItem
                    image="clothing.svg"
                    title="ASOS"
                    subTitle="Clothing & Footwear"
                    price="£30"
                    date="Date: 17-03-2022"
                  />
                </div>
              </Card>

              {/* Card Upcoming Bills */}
              <Card>
                <CardTitle className="justify-center">Upcoming Bills</CardTitle>
                <div className="space-y-2 flex flex-col w-full">
                  <TransactionItem
                    image="food.svg"
                    title="Sainsburys Groceries"
                    subTitle="Food"
                    dayRemaining="9 Days Remaining"
                    date="Date: 17-03-2022"
                    textColor="text-red-300"
                  />
                  <TransactionItem
                    image="food.svg"
                    title="Sainsburys Groceries"
                    subTitle="Food"
                    dayRemaining="9 Days Remaining"
                    date="Date: 17-03-2022"
                    textColor="text-red-300"
                  />
                  <TransactionItem
                    image="food.svg"
                    title="Sainsburys Groceries"
                    subTitle="Food"
                    dayRemaining="9 Days Remaining"
                    date="Date: 17-03-2022"
                    textColor="text-red-300"
                  />
                  <TransactionItem
                    image="food.svg"
                    title="Sainsburys Groceries"
                    subTitle="Food"
                    dayRemaining="9 Days Remaining"
                    date="Date: 17-03-2022"
                    textColor="text-red-300"
                  />
                </div>
              </Card>
            </div>

            {/* Right Content */}
            <div className="w-[30%] space-y-4">
              {/* Card Profile */}
              <Card>
                <CardTitle className="justify-center" removeButton="true">
                  Profile
                </CardTitle>
                <ProfileAvatar />
                <ProfileForm />
              </Card>

              {/* Card Categories  */}
              <Card className="items-center">
                <CardTitle className="justify-center w-[70%]">
                  Categories
                </CardTitle>
                <div className="grid grid-cols-6 gap-2">
                  <CategoryItem image="car.svg" />
                  <CategoryItem image="cinema.svg" />
                  <CategoryItem image="food.svg" />
                  <CategoryItem image="gear.svg" />
                  <CategoryItem image="education.svg" />
                  <CategoryItem image="house-repair.svg" />
                  <CategoryItem image="health.svg" />
                  <CategoryItem image="clothing.svg" />
                  <CategoryItem image="house.svg" />
                  <CategoryItem image="alcohol.svg" />
                  <CategoryItem image="phone.svg" />
                </div>
              </Card>

              {/* Calender Card */}
              <Card className="items-center w-full">
                <CardTitle className="justify-center w-[70%]">
                  Calender
                </CardTitle>
                <CurrentDate />
                <CalenderReact />
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
