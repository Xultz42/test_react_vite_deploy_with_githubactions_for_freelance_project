import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/test_react_vite_deploy_with_githubactions_for_freelance_project/",
});
