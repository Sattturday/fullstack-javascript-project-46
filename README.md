## Hexlet tests and linter status

[![Actions Status](https://github.com/Sattturday/fullstack-javascript-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Sattturday/fullstack-javascript-project-46/actions)
[![Node CI](https://github.com/Sattturday/fullstack-javascript-project-46/actions/workflows/ci.yml/badge.svg)](https://github.com/Sattturday/fullstack-javascript-project-46/actions/workflows/ci.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Sattturday_fullstack-javascript-project-46&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=Sattturday_fullstack-javascript-project-46)

# gendiff

CLI-утилита для сравнения конфигурационных файлов.

Поддерживает форматы входных данных **JSON** и **YAML**  
и несколько форматов вывода различий.

## Минимальные требования

- Node.js ≥ 20
- npm ≥ 9

## Установка

Склонируйте репозиторий и установите зависимости:

```
git clone git@github.com:Sattturday/fullstack-javascript-project-46.git
cd fullstack-javascript-project-46
make install
npm link
```

## Использование

```
gendiff [options] <filepath1> <filepath2>
```

### Опции

- `-f, --format <type>` — формат вывода (по умолчанию: `stylish`)

## Демонстрация работы утилиты

### Пример сравнения плоских файлов (JSON)

Сравнение двух плоских JSON-файлов с выводом в формате stylish (по умолчанию).

```
gendiff file1_flat.json file2_flat.json
```

[![asciinema](https://asciinema.org/a/nXGRXFMPqXM4SVqpTMzsthatH.svg)](https://asciinema.org/a/nXGRXFMPqXM4SVqpTMzsthatH)

### Пример сравнения вложенных файлов в формате stylish (по умолчанию).

Отображает различия в виде дерева с сохранением вложенности в формате stylish (по умолчанию).

```
gendiff file1.json file2.json
```

[![asciinema](https://asciinema.org/a/RzemLwuOo8OcBa2Ipi669k5K1.svg)](https://asciinema.org/a/RzemLwuOo8OcBa2Ipi669k5K1)

### Пример сравнения вложенных файлов в формате plain.

Линейный текстовый формат, удобный для чтения и логирования.

```
gendiff --format plain file1.json file2.json
```

[![asciinema](https://asciinema.org/a/XLQMR1UezbDiVZSAp0l8c4F4V.svg)](https://asciinema.org/a/XLQMR1UezbDiVZSAp0l8c4F4V)

---

### Пример сравнения вложенных файлов в формате JSON.

Структурированный вывод в формате JSON, предназначенный для использования другими программами.

```
gendiff --format json file1.json file2.json
```

[![asciinema](https://asciinema.org/a/hqCREUoetq08wdYJDRPgjHV4k.svg)](https://asciinema.org/a/hqCREUoetq08wdYJDRPgjHV4k)

---

## Поддерживаемые форматы входных данных

- JSON (`.json`)
- YAML (`.yml`, `.yaml`)
