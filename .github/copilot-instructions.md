# Copilot / AI Agent Instructions

Purpose
- Short, targeted guidance to help an AI coding agent be immediately productive in this repository.
- Note: the repository currently contains no source files / manifests. These instructions are written to be conservative and adaptable; please upload the code or confirm the primary language and runtimes so the instructions can be specialized.

Discovery steps (first actions for any agent)
1. List top-level files and folders. If empty, report that back to the human and ask for the project archive or entrypoint.
2. Search for these manifests and configuration files (stop when found):
   - `README.md`, `package.json`, `pyproject.toml`, `requirements.txt`, `Pipfile`, `go.mod`, `Cargo.toml`, `composer.json`, `pom.xml`, `Makefile`, `Dockerfile`, `docker-compose.yml`, `.github/workflows/*.yml`.
3. Identify entrypoints: look for `main()` functions, `cmd/`, `src/`, `app/`, `server/`, `manage.py`, `index.js`, or `bin/` scripts.

How to infer the "big picture" architecture
- If a `package.json` exists: look for `scripts.start`, `scripts.dev`, and `workspaces` (monorepo). Check `src/` vs `packages/` layout.
- If `pyproject.toml` or `requirements.txt` exists: inspect top-level modules, `app/`, `service/`, or `manage.py` for the web server and CLI entrypoints.
- If `go.mod` exists: examine `cmd/` for separate binaries (server/worker), and `internal/` / `pkg/` for shared libraries.
- If `docker-compose.yml` or `k8s` manifests exist: map services to source folders and environment variables defined in `.env` or compose files.
- For infra-as-code (terraform/helm): find bindings between service names and source packages.

Project-specific patterns (what an agent must look for)
- Environment setup: look for `.env`, `.env.example`, `config/*.yaml` or `settings.py`. Prefer .env usage for local runs.
- Migrations: look for `migrations/`, `alembic/`, or `prisma/` directories — these indicate DB-first flows and where schema changes live.
- Tests: search for `tests/`, `__tests__/`, `spec/`, or `test_*.py`. Prefer running the project's test runner (npm/yarn, pytest, go test, cargo test).

Common commands mapping (agent should only run if matching files found)
- Node/npm: `npm ci` then `npm run dev` or `npm start` (inspect `package.json` first)
- Python/Poetry: `poetry install` then `poetry run <entry>` or `python -m <module>`
- Python/pip: `python -m venv .venv && source .venv/bin/activate && pip install -r requirements.txt`
- Go: `go build ./...` then `./cmd/<service>` or `go run ./cmd/<service>`
- Docker: `docker compose up --build` (if `docker-compose.yml` or `docker-compose.yaml` present)

Debugging and iterative edits
- Prefer small, local reproductions: run unit tests for the failing area before changing code.
- When adding or modifying run scripts, update the manifest (`package.json`, `Makefile`, etc.) so CI mirrors local runs.

What to avoid / assumptions not to make
- Do not assume language or framework — detect via manifests and file patterns first.
- Do not run network calls or alter CI workflows without human approval.

When repo is empty (current state)
- Tell the human which files are missing (common entrypoints and manifests). Example message the agent should send: "Repo root is empty. Please upload the source tree or tell me the primary language (Node/Python/Go/Rust/Java) and the dev commands to run. I can then generate precise Copilot instructions and a small `dev` Makefile or `README`.

How to ask for clarifying information (templates an agent should use)
- "I couldn't find any manifests in the repo. Which language/runtime should I assume?"
- "If you want an initial dev environment, do you prefer Docker-based or local venv/npm setups?"

Files and locations to update when you learn more
- Update this file: `.github/copilot-instructions.md`
- Add language-specific helper docs: `docs/agent-node.md`, `docs/agent-python.md` (optional)

Next steps for a human
- Upload the project files (source, manifests, or a zip) or reply with the primary language and how to run the app locally.

Please review and tell me which language/runtime is primary, and whether you want Docker-first dev instructions or direct local setups. I'll iterate the file after you confirm.