# Quick Translation Guide - Remaining Sections

## For Spanish (es) and French (fr) Completion

### Sections Still Needing Updates:

#### Spanish (es) - Lines ~845-1337 in translations.ts

- ✅ Hero Section - DONE
- ✅ Problem Section - DONE
- ⚠️ Solution Section - NEEDS UPDATE
- ⚠️ Comparison Section - NEEDS UPDATE
- ⚠️ Modules Section - NEEDS UPDATE
- ⚠️ Roadmap Section - NEEDS UPDATE
- ⚠️ Tech Stack - NEEDS UPDATE
- ⚠️ Pricing - NEEDS UPDATE
- ⚠️ Demo Form - NEEDS UPDATE
- ⚠️ FAQ - NEEDS UPDATE
- ⚠️ Footer Section - NEEDS UPDATE

#### French (fr) - Lines ~1394-1737 in translations.ts

- ✅ Hero Section - DONE
- ⚠️ Problem Section - NEEDS UPDATE
- ⚠️ Solution Section - NEEDS UPDATE
- ⚠️ Comparison Section - NEEDS UPDATE
- ⚠️ Modules Section - NEEDS UPDATE
- ⚠️ Roadmap Section - NEEDS UPDATE
- ⚠️ Tech Stack - NEEDS UPDATE
- ⚠️ Pricing - NEEDS UPDATE
- ⚠️ Demo Form - NEEDS UPDATE
- ⚠️ FAQ - NEEDS UPDATE
- ⚠️ Footer Section - NEEDS UPDATE

---

## Translation Pattern to Follow

### Use English as Source, Portuguese as Reference

**English (en)** - Lines 1-423 - ✅ COMPLETE  
**Portuguese (pt)** - Lines 424-844 - ✅ COMPLETE

### Example: Modules Section

**English:**

```typescript
modules: {
  title: "CONSTRUCTION",
  titleHighlight: "CORE MODULES",
  subtitle: "Complete project lifecycle management built for the construction industry",
  items: [
    { name: "Projects", description: "Complete project lifecycle management - planning, execution, tracking, and closeout" },
    { name: "Quality Control", description: "Digital inspections, photo documentation, compliance checklists, automated reports" },
    // ... etc
  ],
}
```

**Spanish Translation Should Be:**

```typescript
modules: {
  title: "MÓDULOS",
  titleHighlight: "PRINCIPALES DE CONSTRUCCIÓN",
  subtitle: "Gestión completa del ciclo de vida del proyecto construida para la industria de la construcción",
  items: [
    { name: "Proyectos", description: "Gestión completa del ciclo de vida del proyecto - planificación, ejecución, seguimiento y cierre" },
    { name: "Control de Calidad", description: "Inspecciones digitales, documentación fotográfica, listas de verificación de cumplimiento, informes automatizados" },
    // ... etc
  ],
}
```

**French Translation Should Be:**

```typescript
modules: {
  title: "MODULES",
  titleHighlight: "PRINCIPAUX DE CONSTRUCTION",
  subtitle: "Gestion complète du cycle de vie du projet construite pour l'industrie de la construction",
  items: [
    { name: "Projets", description: "Gestion complète du cycle de vie du projet - planification, exécution, suivi et clôture" },
    { name: "Contrôle Qualité", description: "Inspections numériques, documentation photographique, listes de vérification de conformité, rapports automatisés" },
    // ... etc
  ],
}
```

---

## Key Construction Terms Translation Reference

### English → Spanish → French

| English                    | Spanish                   | French                  |
| -------------------------- | ------------------------- | ----------------------- |
| **Construction**           | Construcción              | Construction            |
| **Projects**               | Proyectos                 | Projets                 |
| **Quality Control**        | Control de Calidad        | Contrôle Qualité        |
| **IoT Integration**        | Integración IoT           | Intégration IoT         |
| **Fleet Tracking**         | Seguimiento de Flota      | Suivi de Flotte         |
| **Equipment Management**   | Gestión de Equipos        | Gestion d'Équipement    |
| **Workforce Management**   | Gestión de Fuerza Laboral | Gestion du Personnel    |
| **Materials & Inventory**  | Materiales e Inventario   | Matériaux et Inventaire |
| **Document Management**    | Gestión de Documentos     | Gestion de Documents    |
| **Financial Tracking**     | Seguimiento Financiero    | Suivi Financier         |
| **Safety & Compliance**    | Seguridad y Cumplimiento  | Sécurité et Conformité  |
| **Legacy Machinery**       | Maquinaria Heredada       | Machines Héritées       |
| **Analog Gauges**          | Medidores Analógicos      | Jauges Analogiques      |
| **Predictive Maintenance** | Mantenimiento Predictivo  | Maintenance Prédictive  |
| **Digital Inspections**    | Inspecciones Digitales    | Inspections Numériques  |
| **GPS Tracking**           | Rastreo GPS               | Suivi GPS               |
| **Site Supervisor**        | Supervisor de Obra        | Superviseur de Chantier |
| **Project Manager**        | Gerente de Proyecto       | Chef de Projet          |
| **Blueprints**             | Planos                    | Plans                   |
| **Permits**                | Permisos                  | Permis                  |
| **Change Orders**          | Órdenes de Cambio         | Ordres de Modification  |
| **Subcontractor**          | Subcontratista            | Sous-traitant           |
| **Compliance**             | Cumplimiento              | Conformité              |
| **Audit Trails**           | Pistas de Auditoría       | Pistes d'Audit          |
| **Self-Hosted**            | Auto-Hospedado            | Auto-Hébergé            |
| **Cloud-Hosted**           | Hospedado en Nube         | Hébergé Cloud           |

---

## Step-by-Step Update Process

### For Each Section:

1. **Locate the section** in translations.ts (use line numbers from summary)

2. **Find the English version** (lines 1-423)

3. **Copy the structure** exactly

4. **Translate only the text content:**

   - Keep all property names in English (`title`, `subtitle`, `features`, etc.)
   - Keep all code structure identical
   - Only translate the string values

5. **Test translation:**
   - Ensure no syntax errors (proper quotes, commas)
   - Verify special characters are escaped correctly (é, ñ, ç, etc.)

---

## Priority Order

### Spanish (es):

1. **Modules Section** (most user-visible)
2. **FAQ Section** (high user engagement)
3. **Roadmap Section**
4. **Pricing Section**
5. **Demo Form Section**
6. **Footer Section**
7. **Tech Stack Section**
8. **Comparison Section** (partially done)

### French (fr):

1. **Modules Section**
2. **FAQ Section**
3. **Problem Section**
4. **Solution Section**
5. **Roadmap Section**
6. **Pricing Section**
7. **Demo Form Section**
8. **Tech Stack Section**
9. **Comparison Section**

---

## Tools for Translation

### Recommended Services:

1. **DeepL** (https://www.deepl.com/) - Best for ES/FR
2. **Google Translate** - Good baseline
3. **Context.reverso.net** - For construction-specific terminology

### Best Practice:

- Translate English → Spanish/French
- Cross-reference with Portuguese translation for consistency
- Have a native speaker review if possible
- Focus on construction industry terminology accuracy

---

## Testing After Translation

```bash
# If you have Node.js/pnpm installed:
pnpm run dev

# Then test:
1. Switch to Spanish language
2. Navigate through all sections
3. Check for:
   - Proper accents (á, é, í, ó, ú, ñ)
   - Text overflow issues
   - Broken layouts
   - Missing translations

4. Repeat for French
```

---

## Common Pitfalls to Avoid

❌ **DON'T:**

- Change property names (`title` → `titulo`)
- Remove commas or brackets
- Mix single/double quotes inconsistently
- Forget to escape special characters in strings

✅ **DO:**

- Keep exact same structure as English
- Use proper Spanish/French accents
- Maintain professional construction terminology
- Test each section after translating

---

## Contact for Help

If you encounter issues:

1. Check the English and Portuguese versions for reference
2. Ensure JSON syntax is valid (use a JSON validator)
3. Look for TypeScript errors in your editor
4. Compare structure exactly with completed English section

---

## Estimated Time

- **Spanish Completion:** ~2-3 hours (8 sections remaining)
- **French Completion:** ~3-4 hours (10 sections remaining)

**Total:** 5-7 hours for complete multi-language support

---

## Success Criteria

✅ All 4 languages have identical structure  
✅ All construction-specific terminology translated  
✅ No TypeScript/JSON errors  
✅ Website displays correctly in all languages  
✅ Forms work in all languages  
✅ Navigation and CTAs function properly
