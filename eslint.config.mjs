import nextVitals from "eslint-config-next/core-web-vitals"
import eslintConfigPrettier from "eslint-config-prettier"

const eslintConfig = [
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "out/**",
      "build/**",
      "public/**",
      ".codacy/**",
      "src/models/**",
    ],
  },
  ...nextVitals,
  eslintConfigPrettier,
  {
    rules: {
      // Allow setMounted(true) pattern for hydration safety
      "react-hooks/set-state-in-effect": "off",
      // Allow useCallback with function reference
      "react-hooks/use-memo": "off",
    },
  },
]

export default eslintConfig
