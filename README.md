# Перечень команд для работы с GIT
---

***1. Настройки Git*** 
- Настройки конфигурации  
Имя пользователя: `git config user.name "...."`  
Электронная почта пользователя: `git config user.name "...."`  
- Уровни настроек
Системные `--system`  
Глобальные `--global`  
Локальные `--local`  
***2. Основные команды Git***

- **Инициализация репозитория в существующей директории**  
`git init`
- **Добавление файла или изменений в нем в индекс**  
`git add`
- **Сохранение изменений в репозитории**  
`git commit`  
- **Проверка текущего состояния репозитория**  
`git status`  
- **Вывести содержимое файла**  
`cat <FILENAME>`  
- **Создание псевдонимов(alias) для команд**  
*Пример:* `git config --global alias.c 'config --global'
***3. Флаги***  
- **Переименование файла и добавление его в индекс**  
```git mv <old_filename> <new_filename>```
- **Сохранение изменений в репозитории с сообщением**  
```git commit -m "Сообщение"```
- **Удаления файла из индекса**  
```git rm <FILENAME>```  



