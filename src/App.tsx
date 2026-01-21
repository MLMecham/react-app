import React from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import { useState } from "react";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import categories from "./expense-tracker/categories";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "none", amount: 20, category: "Utilities" },
    { id: 2, description: "c", amount: 40, category: "Utilities" },
    { id: 3, description: "d", amount: 20, category: "Utilities" },
    { id: 4, description: "e", amount: 20, category: "Utilities" },
  ]);

  const visibleExpensives = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        ></ExpenseForm>
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        ></ExpenseFilter>
      </div>
      <ExpenseList
        expenses={visibleExpensives}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      ></ExpenseList>
    </>
  );
};

export default App;
