const STORAGE_KEY = "nova_ai_engineer_os_progress_v1";

const codecademyModules = [
  {
    id: "welcome",
    title: "1. Welcome to the AI Engineer Career Path",
    mastery: "complete",
    relevance: "orientation",
    tasks: [
      "Read welcome information",
      "Set personal goal for the path",
      "Add first notes to AI Engineer OS"
    ]
  },
  {
    id: "nn_architectures",
    title: "2. Neural Network Architectures",
    mastery: "understand",
    relevance: "foundational",
    tasks: [
      "Introduction to Neural Network Architectures: informational",
      "Introduction to Neural Network Architectures: lesson",
      "Introduction to Neural Network Architectures: project",
      "Introduction to Neural Network Architectures: quiz",
      "Advanced Neural Network Architectures: lesson",
      "Advanced Neural Network Architectures: project",
      "Advanced Neural Network Architectures: quiz",
      "Assessment: Neural Network Architectures"
    ]
  },
  {
    id: "transformers_intro",
    title: "3. Introduction to AI Transformers",
    mastery: "master concepts",
    relevance: "current-priority",
    tasks: [
      "Transformers: the T in GPT: lesson",
      "Transformers: the T in GPT: quiz",
      "Exploring Transformers with Hugging Face: lesson",
      "Exploring Transformers with Hugging Face: quiz",
      "Exploring Transformers with Hugging Face: article",
      "Exploring Transformers with Hugging Face: project",
      "Assessment: Introduction to AI Transformers"
    ]
  },
  {
    id: "finetuning",
    title: "4. Finetuning Transformer Models",
    mastery: "understand",
    relevance: "job-relevant",
    tasks: [
      "Finetuning Transformer Models: lesson 1",
      "Finetuning Transformer Models: lesson 2",
      "Finetuning Transformer Models: quiz",
      "Finetuning with Hugging Face: lesson",
      "Finetuning with Hugging Face: quiz",
      "Finetuning with Hugging Face: Kanban project",
      "Finetuning with Hugging Face: informational",
      "Assessment: Finetuning Transformer Models"
    ]
  },
  {
    id: "intent_classification",
    title: "5. Portfolio Project: Intent Classification",
    mastery: "portfolio",
    relevance: "portfolio-gold",
    tasks: [
      "Review project requirements",
      "Build intent classification project",
      "Write README notes",
      "Add screenshots or demo notes",
      "Reflect on how this connects to chatbots and routing"
    ]
  },
  {
    id: "openai_intro",
    title: "6. Intro to OpenAI API",
    mastery: "master",
    relevance: "current-priority",
    tasks: [
      "Intro to OpenAI API: informational",
      "Intro to OpenAI API: lesson",
      "Intro to OpenAI API: quiz",
      "Assessment: Intro to OpenAI API"
    ]
  },
  {
    id: "openai_python",
    title: "7. OpenAI API Coding with Python",
    mastery: "master",
    relevance: "current-priority",
    tasks: [
      "OpenAI API Coding in Python: lesson",
      "OpenAI API Coding in Python: project",
      "OpenAI API Coding in Python: quiz",
      "Assessment: OpenAI API Coding with Python"
    ]
  },
  {
    id: "benchmarking_llms",
    title: "8. Benchmarking LLMs",
    mastery: "master",
    relevance: "rising-importance",
    tasks: [
      "Introduction to Evaluating LLMs: lesson",
      "Introduction to Evaluating LLMs: quiz",
      "Using Benchmark Datasets for Evaluating LLMs: lesson",
      "Using Benchmark Datasets for Evaluating LLMs: project",
      "Using Benchmark Datasets for Evaluating LLMs: quiz",
      "Using Benchmark Datasets for Evaluating LLMs: informational",
      "Assessment: Benchmarking LLMs"
    ]
  },
  {
    id: "streamlit_apps",
    title: "9. Build AI Applications with Streamlit",
    mastery: "master",
    relevance: "portfolio-gold",
    tasks: [
      "Build AI Applications with Streamlit: informational",
      "Build AI Applications with Streamlit: lesson",
      "Build AI Applications with Streamlit: article",
      "Build AI Applications with Streamlit: project",
      "Build AI Applications with Streamlit: quiz",
      "Assessment: Build AI Applications with Streamlit"
    ]
  },
  {
    id: "rag_apps",
    title: "10. Retrieval-Augmented Generation, RAG",
    mastery: "master",
    relevance: "portfolio-gold",
    tasks: [
      "RAG Foundations: lesson",
      "RAG Foundations: quiz",
      "Build a RAG App: lesson",
      "Build a RAG App: quiz",
      "RAG Techniques: lesson",
      "RAG Techniques: quiz",
      "Assessment: Creating AI Applications using RAG"
    ]
  },
  {
    id: "deployment",
    title: "11. Best Practices in AI Deployment",
    mastery: "master basics",
    relevance: "job-relevant",
    tasks: [
      "Best Practices in AI Deployment: lesson",
      "Best Practices in AI Deployment: project",
      "Best Practices in AI Deployment: quiz",
      "Best Practices in AI Deployment: informational",
      "Assessment: Best Practices in AI Deployment"
    ]
  },
  {
    id: "agents_intro",
    title: "12. Intro to AI Agents",
    mastery: "understand",
    relevance: "fast-moving",
    tasks: [
      "Understanding AI Agents and Autonomous Systems: informational",
      "Understanding AI Agents and Autonomous Systems: lesson",
      "Understanding AI Agents and Autonomous Systems: quiz",
      "Assessment: Intro to AI Agents"
    ]
  },
  {
    id: "langchain",
    title: "13. Learn Fundamentals of LangChain",
    mastery: "understand selectively",
    relevance: "fast-moving",
    tasks: [
      "Getting Started with LangChain: lesson",
      "Getting Started with LangChain: quiz",
      "Getting Started with LangChain: Kanban project",
      "Assessment: Learn Fundamentals of LangChain"
    ]
  },
  {
    id: "build_agents",
    title: "14. Learn How to Build AI Agents",
    mastery: "understand/master selectively",
    relevance: "rising-importance",
    tasks: [
      "AI Agents and Workflows: lesson",
      "AI Agents and Workflows: project",
      "AI Agents and Workflows: quiz",
      "Augmented LLMs for AI Agents: lesson",
      "Augmented LLMs for AI Agents: project",
      "Augmented LLMs for AI Agents: quiz",
      "Augmented LLMs for AI Agents: informational",
      "Assessment: Learn How to Build AI Agents"
    ]
  },
  {
    id: "trip_planner",
    title: "15. Capstone Project: Trip Planner",
    mastery: "portfolio",
    relevance: "portfolio-gold",
    tasks: [
      "Review capstone requirements",
      "Plan architecture",
      "Build app workflow",
      "Add tool-calling or agentic behavior",
      "Add user feedback loop",
      "Write README",
      "Polish demo screenshots",
      "Finalize capstone submission"
    ]
  },
  {
    id: "next_steps",
    title: "16. Career Path Next Steps",
    mastery: "complete",
    relevance: "career-alignment",
    tasks: [
      "Read next steps",
      "Update portfolio plan",
      "Choose next certification or learning path",
      "Write final reflection",
      "Create post-certificate roadmap"
    ]
  }
];

const companionModules = [
  {
    id: "repo_setup",
    title: "Companion 0. Repo + Dashboard Setup",
    mastery: "master",
    relevance: "foundation",
    tasks: [
      "Create ai-engineer-os GitHub repo",
      "Add index.html, styles.css, and script.js",
      "Create notes folder",
      "Turn on GitHub Pages later",
      "Write first README"
    ]
  },
  {
    id: "dev_environment",
    title: "Companion 1. Clean AI Dev Environment",
    mastery: "master",
    relevance: "foundation",
    tasks: [
      "Confirm Python version",
      "Create virtual environment",
      "Install Jupyter",
      "Install Streamlit",
      "Create requirements.txt",
      "Practice activate/deactivate workflow"
    ]
  },
  {
    id: "git_workflow",
    title: "Companion 2. Git/GitHub Save-Point Ritual",
    mastery: "master",
    relevance: "job-relevant",
    tasks: [
      "Practice git status",
      "Practice git add",
      "Practice git commit",
      "Practice git push",
      "Write commit messages after study blocks",
      "Recover from one small Git mistake"
    ]
  },
  {
    id: "numpy_pandas_refresh",
    title: "Companion 3. NumPy + pandas Refresh",
    mastery: "understand",
    relevance: "foundation",
    tasks: [
      "Review arrays vs lists",
      "Practice NumPy array operations",
      "Review DataFrame basics",
      "Load a CSV",
      "Filter/sort/group data",
      "Make tiny data-cleaning notebook"
    ]
  },
  {
    id: "math_stats_glossary",
    title: "Companion 4. Math + Stats Tiny Raccoon Fire Kit",
    mastery: "understand",
    relevance: "foundation",
    tasks: [
      "Create glossary for mean, median, variance, standard deviation",
      "Create probability basics note",
      "Create vector/matrix basics note",
      "Create gradient/loss plain-English note",
      "Connect each concept to ML examples"
    ]
  },
  {
    id: "hello_streamlit",
    title: "Companion 5. Hello AI Engineer OS Streamlit App",
    mastery: "master basics",
    relevance: "portfolio-seed",
    tasks: [
      "Create app.py",
      "Add title and intro",
      "Add progress metric",
      "Add text input",
      "Run locally",
      "Screenshot result"
    ]
  },
  {
    id: "ai_study_companion",
    title: "Companion 6. AI Study Companion v0.1",
    mastery: "portfolio",
    relevance: "portfolio-gold",
    tasks: [
      "Plan app features",
      "Create manual flashcard tracker",
      "Add confidence ratings",
      "Add review prompts",
      "Connect later to LLM API",
      "Write portfolio notes"
    ]
  },
  {
    id: "rag_notes_bot",
    title: "Companion 7. RAG Over My Notes",
    mastery: "portfolio",
    relevance: "portfolio-gold",
    tasks: [
      "Collect notes as markdown",
      "Chunk notes",
      "Create embeddings",
      "Add retrieval",
      "Add chat interface",
      "Add citations/source snippets"
    ]
  },
  {
    id: "cyberdeck_pet",
    title: "Companion 8. Cyberdeck AI Pet Assistant",
    mastery: "capstone idea",
    relevance: "signature-project",
    tasks: [
      "Define concept and features",
      "Design virtual pet states",
      "Plan Raspberry Pi version",
      "Create desktop prototype first",
      "Add task/reminder logic",
      "Add personality layer",
      "Document build roadmap"
    ]
  }
];

let state = loadState();

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) {
    return {
      checked: {},
      notes: {}
    };
  }

  try {
    return JSON.parse(saved);
  } catch {
    return {
      checked: {},
      notes: {}
    };
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function getAllModules() {
  return [...codecademyModules, ...companionModules];
}

function taskKey(moduleId, taskIndex) {
  return `${moduleId}::${taskIndex}`;
}

function getModuleProgress(module) {
  const total = module.tasks.length;
  const completed = module.tasks.filter((_, index) => state.checked[taskKey(module.id, index)]).length;
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

  return { total, completed, percent };
}

function renderModules(modules, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  modules.forEach((module) => {
    const progress = getModuleProgress(module);

    const card = document.createElement("article");
    card.className = "module-card";
    card.dataset.moduleId = module.id;

    card.innerHTML = `
      <div class="module-top">
        <div>
          <h3>${module.title}</h3>
          <div class="module-meta">
            <span class="tag ${getMasteryClass(module.mastery)}">${module.mastery}</span>
            <span class="tag ${getRelevanceClass(module.relevance)}">${module.relevance}</span>
          </div>
        </div>
        <div class="module-progress">${progress.percent}%</div>
      </div>

      <div class="bar">
        <div class="bar-fill" style="width: ${progress.percent}%"></div>
      </div>

      <div class="task-list">
        ${module.tasks.map((task, index) => {
          const key = taskKey(module.id, index);
          const checked = state.checked[key] ? "checked" : "";

          return `
            <label class="task">
              <input type="checkbox" data-module-id="${module.id}" data-task-index="${index}" ${checked} />
              <span>${task}</span>
            </label>
          `;
        }).join("")}
      </div>

      <textarea class="module-note" data-note-id="${module.id}" placeholder="Notes, blockers, ideas, tiny neural gremlin observations...">${state.notes[module.id] || ""}</textarea>
    `;

    container.appendChild(card);
  });
}

function getMasteryClass(mastery) {
  const lower = mastery.toLowerCase();

  if (lower.includes("master")) return "master";
  if (lower.includes("understand")) return "understand";
  if (lower.includes("portfolio")) return "portfolio";
  if (lower.includes("complete")) return "complete";

  return "";
}

function getRelevanceClass(relevance) {
  const lower = relevance.toLowerCase();

  if (lower.includes("portfolio")) return "portfolio";
  if (lower.includes("current") || lower.includes("rising")) return "master";
  if (lower.includes("foundation") || lower.includes("job")) return "understand";
  if (lower.includes("fast")) return "complete";

  return "";
}

function updateStats() {
  const allModules = getAllModules();
  const allTasks = allModules.flatMap(module =>
    module.tasks.map((_, index) => ({
      moduleId: module.id,
      index
    }))
  );

  const allCompleted = allTasks.filter(item => state.checked[taskKey(item.moduleId, item.index)]).length;
  const allPercent = allTasks.length === 0 ? 0 : Math.round((allCompleted / allTasks.length) * 100);

  const codecademyTasks = codecademyModules.flatMap(module =>
    module.tasks.map((_, index) => ({
      moduleId: module.id,
      index
    }))
  );

  const codecademyCompleted = codecademyTasks.filter(item => state.checked[taskKey(item.moduleId, item.index)]).length;
  const codecademyPercent = codecademyTasks.length === 0 ? 0 : Math.round((codecademyCompleted / codecademyTasks.length) * 100);

  const companionTasks = companionModules.flatMap(module =>
    module.tasks.map((_, index) => ({
      moduleId: module.id,
      index
    }))
  );

  const companionCompleted = companionTasks.filter(item => state.checked[taskKey(item.moduleId, item.index)]).length;
  const companionPercent = companionTasks.length === 0 ? 0 : Math.round((companionCompleted / companionTasks.length) * 100);

  document.getElementById("overallPercent").textContent = `${allPercent}%`;
  document.getElementById("overallBar").style.width = `${allPercent}%`;

  document.getElementById("codecademyPercent").textContent = `${codecademyPercent}%`;
  document.getElementById("codecademyBar").style.width = `${codecademyPercent}%`;

  document.getElementById("companionPercent").textContent = `${companionPercent}%`;
  document.getElementById("companionBar").style.width = `${companionPercent}%`;

  document.getElementById("completedCount").textContent = allCompleted;
}

function rerender() {
  renderModules(codecademyModules, "codecademyModules");
  renderModules(companionModules, "companionModules");
  updateStats();
}

function openNav() {
  document.getElementById("sideNav").classList.add("open");
  document.getElementById("navBackdrop").classList.add("open");
}

function closeNav() {
  document.getElementById("sideNav").classList.remove("open");
  document.getElementById("navBackdrop").classList.remove("open");
}

function showPage(pageId) {
  const pages = document.querySelectorAll(".page");
  const navLinks = document.querySelectorAll(".nav-link");
  const contentWindow = document.getElementById("contentWindow");

  pages.forEach((page) => {
    page.classList.toggle("active", page.id === pageId);
  });

  navLinks.forEach((link) => {
    link.classList.toggle("active", link.dataset.page === pageId);
  });

  contentWindow.scrollTop = 0;
  closeNav();
}

document.addEventListener("change", (event) => {
  const target = event.target;

  if (target.matches('input[type="checkbox"][data-module-id]')) {
    const moduleId = target.dataset.moduleId;
    const taskIndex = target.dataset.taskIndex;
    const key = taskKey(moduleId, taskIndex);

    state.checked[key] = target.checked;
    saveState();
    rerender();
  }
});

document.addEventListener("input", (event) => {
  const target = event.target;

  if (target.matches("textarea[data-note-id]")) {
    state.notes[target.dataset.noteId] = target.value;
    saveState();
  }
});

document.getElementById("resetBtn").addEventListener("click", () => {
  const confirmed = confirm("Reset all AI Engineer OS progress on this browser?");
  if (!confirmed) return;

  state = {
    checked: {},
    notes: {}
  };

  saveState();
  rerender();
});

document.getElementById("exportBtn").addEventListener("click", () => {
  const blob = new Blob([JSON.stringify(state, null, 2)], {
    type: "application/json"
  });

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = "ai-engineer-os-progress.json";
  link.click();

  URL.revokeObjectURL(url);
});

document.getElementById("importInput").addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();

  reader.onload = () => {
    try {
      const imported = JSON.parse(reader.result);

      if (!imported.checked || !imported.notes) {
        alert("This does not look like a valid AI Engineer OS progress file.");
        return;
      }

      state = imported;
      saveState();
      rerender();
      alert("Progress imported successfully.");
    } catch {
      alert("Could not import that file. The JSON goblin rejected it.");
    }
  };

  reader.readAsText(file);
});

document.getElementById("navToggle").addEventListener("click", openNav);
document.getElementById("navClose").addEventListener("click", closeNav);
document.getElementById("navBackdrop").addEventListener("click", closeNav);

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    showPage(link.dataset.page);
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeNav();
  }
});

rerender();