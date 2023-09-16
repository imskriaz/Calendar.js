/*! Calendar.js v2.5.5 | (c) Bunoon | GNU AGPLv3 License */
var __TRANSLATION_OPTIONS = {
  "dayHeaderNames": [
    "Seg",
    "Ter",
    "Qua",
    "Qui",
    "Sex",
    "Sáb",
    "Dom"
  ],
  "dayNames": [
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
    "Domingo"
  ],
  "dayNamesAbbreviated": [
    "Seg",
    "Ter",
    "Qua",
    "Qui",
    "Sex",
    "Sáb",
    "Dom"
  ],
  "monthNames": [
    "Janeiro",
    "Fevereiro",
    "março",
    "abril",
    "maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "novembro",
    "dezembro"
  ],
  "monthNamesAbbreviated": [
    "janeiro",
    "Fevereiro",
    "Março",
    "abril",
    "maio",
    "junho",
    "julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "novembro",
    "dezembro"
  ],
  "previousMonthTooltipText": "Mês anterior",
  "nextMonthTooltipText": "Próximo mês",
  "previousDayTooltipText": "Dia anterior",
  "nextDayTooltipText": "Próximo dia",
  "previousWeekTooltipText": "Semana anterior",
  "nextWeekTooltipText": "Semana que vem",
  "addEventTooltipText": "Adicionar Evento",
  "closeTooltipText": "Fechar",
  "exportEventsTooltipText": "Exportar eventos",
  "todayTooltipText": "Hoje",
  "refreshTooltipText": "Atualizar",
  "searchTooltipText": "Procurar",
  "expandDayTooltipText": "Expandir dia",
  "listAllEventsTooltipText": "Ver todos os eventos",
  "listWeekEventsTooltipText": "Ver eventos da semana atual",
  "fromText": "De:",
  "toText": "Para:",
  "isAllDayText": "É o dia todo",
  "titleText": "Título:",
  "descriptionText": "Descrição:",
  "locationText": "Localização:",
  "addText": "Adicionar",
  "updateText": "Atualizar",
  "cancelText": "Cancelar",
  "removeEventText": "Remover",
  "addEventTitle": "Adicionar Evento",
  "editEventTitle": "Editar evento",
  "exportStartFilename": "exportados_eventos_",
  "fromTimeErrorMessage": "Selecione um horário 'De' válido.",
  "toTimeErrorMessage": "Selecione um horário 'até' válido.",
  "toSmallerThanFromErrorMessage": "Selecione uma data 'Até' que seja maior que a data 'De'.",
  "titleErrorMessage": "Insira um valor no campo 'Título' (sem espaço vazio).",
  "stText": "",
  "ndText": "",
  "rdText": "",
  "thText": "",
  "yesText": "Sim",
  "noText": "Não",
  "allDayText": "Dia todo",
  "allEventsText": "Todos os eventos",
  "toTimeText": "para",
  "confirmEventRemoveTitle": "Confirmar remoção do evento",
  "confirmEventRemoveMessage": "A remoção deste evento não pode ser desfeita. ",
  "okText": "OK",
  "exportEventsTitle": "Exportar eventos",
  "selectColorsText": "Selecione as cores",
  "backgroundColorText": "Cor de fundo:",
  "textColorText": "Cor do texto:",
  "borderColorText": "Cor da borda:",
  "searchEventsTitle": "Pesquisar eventos",
  "previousText": "Anterior",
  "nextText": "Próximo",
  "matchCaseText": "Caso de compatibilidade",
  "repeatsText": "Repete:",
  "repeatDaysToExcludeText": "Repita os dias para excluir:",
  "daysToExcludeText": "Dias para excluir:",
  "seriesIgnoreDatesText": "Série ignora datas:",
  "repeatsNever": "Nunca",
  "repeatsEveryDayText": "Diariamente",
  "repeatsEveryWeekText": "Toda semana",
  "repeatsEvery2WeeksText": "A cada 2 semanas",
  "repeatsEveryMonthText": "Todo mês",
  "repeatsEveryYearText": "Todo ano",
  "repeatsCustomText": "Personalizado:",
  "repeatOptionsTitle": "Opções de repetição",
  "moreText": "Mais",
  "includeText": "Incluir:",
  "minimizedTooltipText": "Minimizar",
  "restoreTooltipText": "Restaurar",
  "removeAllEventsInSeriesText": "Remover todos os eventos da série",
  "createdText": "Criada:",
  "organizerNameText": "Organizador:",
  "organizerEmailAddressText": "E-mail do organizador:",
  "enableFullScreenTooltipText": "Ative o modo de tela cheia",
  "disableFullScreenTooltipText": "Desligue o modo de tela cheia",
  "idText": "EU IA:",
  "expandMonthTooltipText": "Expandir Mês",
  "repeatEndsText": "Repita as extremidades:",
  "noEventsAvailableText": "Nenhum evento disponível.",
  "viewWeekEventsText": "Ver eventos da semana",
  "noEventsAvailableFullText": "Não há eventos disponíveis para visualização.",
  "clickText": "Clique",
  "hereText": "aqui",
  "toAddANewEventText": "para adicionar um novo evento.",
  "weekText": "Semana",
  "groupText": "Grupo:",
  "configurationTooltipText": "Configuração",
  "configurationTitleText": "Configuração",
  "groupsText": "Grupos",
  "eventNotificationTitle": "Calendário.js",
  "eventNotificationBody": "O evento '{0}' começou.",
  "optionsText": "Opções:",
  "startsWithText": "Começa com",
  "endsWithText": "Termina com",
  "containsText": "Contém",
  "displayTabText": "Mostrar",
  "enableAutoRefreshForEventsText": "Ativar atualização automática para eventos",
  "enableBrowserNotificationsText": "Habilitar notificações do navegador",
  "enableTooltipsText": "Ativar dicas de ferramentas",
  "dayText": "dia",
  "daysText": "dias",
  "hourText": "hora",
  "hoursText": "horas",
  "minuteText": "minuto",
  "minutesText": "minutos",
  "enableDragAndDropForEventText": "Ativar arrastar",
  "organizerTabText": "Organizador",
  "removeEventsTooltipText": "Remover eventos",
  "confirmEventsRemoveTitle": "Confirmar remoção de eventos",
  "confirmEventsRemoveMessage": "A remoção desses eventos não repetitivos não pode ser desfeita. ",
  "eventText": "Evento",
  "optionalText": "Opcional",
  "urlText": "URL:",
  "openUrlText": "Abrir URL",
  "enableDayNameHeadersInMainDisplayText": "Habilitar cabeçalhos de nomes de dias na tela principal",
  "thisWeekTooltipText": "Essa semana",
  "dailyText": "Diário",
  "weeklyText": "Semanalmente",
  "monthlyText": "Por mês",
  "yearlyText": "Anual",
  "repeatsByCustomSettingsText": "Por configurações personalizadas",
  "lastUpdatedText": "Ultima atualização:",
  "advancedText": "Avançado",
  "copyText": "cópia de",
  "pasteText": "Colar",
  "duplicateText": "Duplicado",
  "showAlertsText": "Mostrar alertas",
  "selectDatePlaceholderText": "Selecione a data...",
  "hideDayText": "Ocultar dia",
  "notSearchText": "Não (oposto)",
  "showEmptyDaysInWeekViewText": "Mostrar dias vazios na visualização semanal",
  "showHolidaysInTheDisplaysText": "Mostrar feriados na tela principal e nas barras de título",
  "newEventDefaultTitle": "* Novo evento",
  "urlErrorMessage": "Insira um URL válido no campo 'Url' (ou deixe em branco).",
  "searchTextBoxPlaceholder": "Título de pesquisa, descrição, etc.",
  "currentMonthTooltipText": "Mês atual",
  "cutText": "Corte",
  "showMenuTooltipText": "Mostrar menu",
  "eventTypesText": "Tipos de eventos",
  "lockedText": "Bloqueado:",
  "typeText": "Tipo:",
  "sideMenuHeaderText": "Calendário.js",
  "sideMenuDaysText": "Dias",
  "visibleDaysText": "Dias Visíveis",
  "previousYearTooltipText": "Ano anterior",
  "nextYearTooltipText": "Próximo ano",
  "showOnlyWorkingDaysText": "Mostrar apenas dias úteis",
  "exportFilenamePlaceholderText": "Nome (opcional)",
  "errorText": "Erro",
  "exportText": "Exportar",
  "configurationUpdatedText": "Configuração atualizada.",
  "eventAddedText": "{0} evento adicionado.",
  "eventUpdatedText": "{0} evento atualizado.",
  "eventRemovedText": "{0} evento removido.",
  "eventsRemovedText": "{0} eventos removidos.",
  "eventsExportedToText": "Eventos exportados para {0}.",
  "eventsPastedText": "{0} eventos colados.",
  "eventsExportedText": "Eventos exportados.",
  "copyToClipboardOnlyText": "Copiar apenas para a área de transferência",
  "workingDaysText": "Dias úteis",
  "weekendDaysText": "Dias de fim de semana",
  "showAsBusyText": "Mostrar como ocupado",
  "selectAllText": "Selecionar tudo",
  "selectNoneText": "Selecione nenhum",
  "importEventsTooltipText": "Importar eventos",
  "eventsImportedText": "{0} eventos importados."
};